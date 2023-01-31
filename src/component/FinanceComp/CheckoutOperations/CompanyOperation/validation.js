import * as yup from "yup";

const validations = yup.object().shape({
    operation: yup.string().required("Əməliyyat mütləq daxil edilməlidir"),
    amount: yup.number().required("Məbləğ mütləq daxil edilməlidir"),
})

export default validations;