import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { c as useTranslation } from "../main.ssg.mjs";
import "vite-ssg";
import "react-router-dom";
import "react-helmet-async";
import "lucide-react";
const AdminDashboard = () => {
  const { t } = useTranslation("en");
  const [blobs, setBlobs] = useState([]);
  const [selectedBlobs, setSelectedBlobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentEditBlob, setCurrentEditBlob] = useState(null);
  const fetchBlobs = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/.netlify/functions/list-images");
      const data = await res.json();
      setBlobs(data.map((img) => ({
        key: img.key,
        url: `/.netlify/functions/get-image?key=${img.key}`,
        metadata: img.metadata
      })));
    } catch (err) {
      console.error("Failed to fetch blobs:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchBlobs();
  }, [fetchBlobs]);
  const handleUpload = async (files) => {
    setIsUploading(true);
    setUploadProgress(0);
    try {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });
      const xhr = new XMLHttpRequest();
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          setUploadProgress(Math.round(event.loaded / event.total * 100));
        }
      };
      await new Promise((resolve, reject) => {
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(new Error("Upload failed"));
        xhr.open("POST", "/.netlify/functions/upload", true);
        xhr.send(formData);
      });
      await fetchBlobs();
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };
  const handleDeleteSelected = async () => {
    if (!selectedBlobs.length)
      return;
    try {
      await Promise.all(selectedBlobs.map(
        (key) => fetch("/.netlify/functions/delete-image", {
          method: "POST",
          body: JSON.stringify({ key }),
          headers: { "Content-Type": "application/json" }
        })
      ));
      setSelectedBlobs([]);
      await fetchBlobs();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };
  const openEditModal = (blob) => {
    setCurrentEditBlob(blob);
    setEditModalOpen(true);
  };
  const saveMetadata = async (updatedBlob) => {
    try {
      await fetch("/.netlify/functions/update-metadata", {
        method: "POST",
        body: JSON.stringify({
          key: updatedBlob.key,
          metadata: updatedBlob.metadata
        }),
        headers: { "Content-Type": "application/json" }
      });
      setEditModalOpen(false);
      await fetchBlobs();
    } catch (err) {
      console.error("Update metadata error:", err);
    }
  };
  const filteredBlobs = blobs.filter(
    (blob) => {
      var _a;
      return blob.key.toLowerCase().includes(searchQuery.toLowerCase()) || ((_a = blob.metadata.altText) == null ? void 0 : _a.toLowerCase().includes(searchQuery.toLowerCase()));
    }
  );
  return /* @__PURE__ */ jsxs("div", { className: "admin-container", style: { marginTop: "200px" }, children: [
    /* @__PURE__ */ jsxs("header", { className: "admin-header", children: [
      /* @__PURE__ */ jsx("h1", { children: t("admin.title") }),
      /* @__PURE__ */ jsx("div", { className: "search-box", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: t("admin.search_placeholder"),
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value)
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "upload-section", children: [
      /* @__PURE__ */ jsx(
        FileDropzone,
        {
          onDrop: handleUpload,
          disabled: isUploading
        }
      ),
      isUploading && /* @__PURE__ */ jsxs("div", { className: "upload-progress", children: [
        /* @__PURE__ */ jsx("progress", { value: uploadProgress, max: "100" }),
        /* @__PURE__ */ jsxs("span", { children: [
          uploadProgress,
          "%"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "action-toolbar", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleDeleteSelected,
          disabled: !selectedBlobs.length,
          children: t("admin.delete_selected")
        }
      ),
      /* @__PURE__ */ jsxs("span", { children: [
        selectedBlobs.length,
        " ",
        t("admin.selected_items")
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "gallery-section", children: isLoading ? /* @__PURE__ */ jsx("div", { className: "loading-indicator", children: t("admin.loading") }) : /* @__PURE__ */ jsx("div", { className: "image-grid", children: filteredBlobs.map((blob) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      ImageCard,
      {
        blob,
        isSelected: selectedBlobs.includes(blob.key),
        onSelect: (selected) => {
          setSelectedBlobs(
            (prev) => selected ? [...prev, blob.key] : prev.filter((key) => key !== blob.key)
          );
        },
        onEdit: () => openEditModal(blob)
      }
    ) }, blob.key)) }) }),
    editModalOpen && currentEditBlob && /* @__PURE__ */ jsx(
      EditMetadataModal,
      {
        blob: currentEditBlob,
        onClose: () => setEditModalOpen(false),
        onSave: saveMetadata
      }
    )
  ] });
};
const FileDropzone = ({ onDrop, disabled }) => {
  return /* @__PURE__ */ jsxs("div", { className: "file-dropzone", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        multiple: true,
        onChange: (e) => e.target.files && onDrop(e.target.files),
        disabled
      }
    ),
    /* @__PURE__ */ jsx("p", { children: disabled ? "上传中..." : "拖放文件到这里或点击选择文件" })
  ] });
};
const EditMetadataModal = ({ blob, onClose, onSave }) => {
  var _a;
  const [altText, setAltText] = useState(blob.metadata.altText || "");
  const [categories, setCategories] = useState(
    ((_a = blob.metadata.categories) == null ? void 0 : _a.join(", ")) || ""
  );
  return /* @__PURE__ */ jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ jsxs("div", { className: "modal-content", children: [
    /* @__PURE__ */ jsx("h3", { children: "编辑元数据" }),
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { children: "替代文本" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: altText,
          onChange: (e) => setAltText(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { children: "分类 (逗号分隔)" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: categories,
          onChange: (e) => setCategories(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "modal-actions", children: [
      /* @__PURE__ */ jsx("button", { onClick: onClose, children: "取消" }),
      /* @__PURE__ */ jsx("button", { onClick: () => onSave({
        ...blob,
        metadata: {
          ...blob.metadata,
          altText,
          categories: categories.split(",").map((c) => c.trim()).filter((c) => c)
        }
      }), children: "保存" })
    ] })
  ] }) });
};
const ImageCard = ({ blob, isSelected, onSelect, onEdit }) => {
  return /* @__PURE__ */ jsxs("div", { className: "image-card", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        checked: isSelected,
        onChange: (e) => onSelect(e.target.checked)
      }
    ),
    /* @__PURE__ */ jsx("img", { src: blob.url, alt: blob.metadata.altText || "" }),
    /* @__PURE__ */ jsx("button", { onClick: onEdit, children: "编辑" })
  ] });
};
export {
  AdminDashboard as default
};
