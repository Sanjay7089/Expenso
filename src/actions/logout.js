// rrd imports
import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: "userName",
  });
  toast.success("Account Deleted");
  // return redirect
  return redirect("/");
}
