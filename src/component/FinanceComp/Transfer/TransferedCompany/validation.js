import * as yup from "yup";

const validations = yup.object().shape({
    transfer_amount: yup.number().required("Məbləğ mütləq daxil edilməlidir")
})

export default validations;