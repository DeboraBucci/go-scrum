import Swal from "sweetalert2";

const SweetAlert = ({ title, text, icon = "error" }) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    customClass: "swal",
  });
};

export default SweetAlert;
