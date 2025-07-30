import React from 'react';

// 简化的CSS动画背景组件，替代Three.js实现
const Silk: React.FC<{
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}> = ({
  speed = 5,
  scale = 1,
  color = "#7B7481",
  noiseIntensity = 1.5,
  rotation = 0,
}) => {
  const animationDuration = `${20 / speed}s`;
  
  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        background: `linear-gradient(${rotation}deg, ${color}20, ${color}40, ${color}20)`,
        backgroundSize: `${scale * 100}% ${scale * 100}%`,
        animation: `silkFlow ${animationDuration} ease-in-out infinite`,
        opacity: noiseIntensity * 0.6,
      }}
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `radial-gradient(circle at 30% 70%, ${color}30, transparent 50%), 
                      radial-gradient(circle at 70% 30%, ${color}20, transparent 50%)`,
          animation: `silkWave ${animationDuration} ease-in-out infinite reverse`,
        }}
      />
      
      <style jsx>{`
        @keyframes silkFlow {
          0%, 100% { 
            transform: translateX(-10%) translateY(-5%) scale(1);
            filter: blur(0px);
          }
          50% { 
            transform: translateX(10%) translateY(5%) scale(1.1);
            filter: blur(1px);
          }
        }
        
        @keyframes silkWave {
          0%, 100% { 
            transform: rotate(0deg) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: rotate(2deg) scale(1.05);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default Silk;