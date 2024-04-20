import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canva-load"></span>
      <p className="text-lg text-gray-100 font-semibold mt-40">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
