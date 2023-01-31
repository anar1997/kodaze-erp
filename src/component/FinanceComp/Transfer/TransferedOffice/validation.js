import * as yup from "yup";

const validations = yup.object().shape({
    company_id: yup.number().required("Şirkət mütləq daxil edilməlidir!"),
    transfer_amount: yup.number().required("Məbləğ mütləq daxil edilməlidir!")
})

export default validations;
