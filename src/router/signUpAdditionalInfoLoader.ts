import { redirect } from "react-router-dom";
import request from "src/utils/requestClient";

const loader = async (): Promise<string[] | Response> => {
  try {
    const colors: string[] = await request.get("colors").json();
    return colors.map(
      (color) => `${color.charAt(0).toUpperCase()}${color.slice(1)}`
    );
  } catch (error) {
    return redirect("/error");
  }
};

export default loader;
