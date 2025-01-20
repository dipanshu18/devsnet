import { ContinueWithBtn } from "@/components/continue-with-btn";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function Register() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-5">Register</h1>

      <div className="max-w-lg mx-auto w-full space-y-5">
        <ContinueWithBtn text="google" icon={<FaGoogle />} />
        <ContinueWithBtn text="github" icon={<FaGithub />} />
      </div>
    </div>
  );
}
