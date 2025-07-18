declare module 'i18next-http-backend' {
  import { BackendOptions, RequestCallback } from 'i18next';

  class HttpBackend {
    constructor(options?: BackendOptions);
    read(language: string, namespace: string, callback: RequestCallback): void;
    // Add other methods if needed
  }

  export default HttpBackend;
} 