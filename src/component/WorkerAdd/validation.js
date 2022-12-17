import * as yup from "yup";


const validations = yup.object().shape({
    fullname: yup.string().required("Bu xana boş ola bilməz!"),
    phone_number_1: yup.string().min(13).required("Bu xana boş ola bilməz!"),
    phone_number_2: yup.string().min(13),
    email: yup.string().email(),
    salary: yup.number().positive(),
    // electronic_signature: yup.required()
})

export default validations;