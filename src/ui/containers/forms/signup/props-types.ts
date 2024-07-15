export interface SignUpFormProps {
  action?: string
  onSubmit?: (data: SignUpFormValues) => void
}

export interface SignUpFormValues {
  firstName: string
  lastName: string
  gender: string
  birthDate: string
  documentType: string
  documentNumber: string
  email: string
  password: string
  username: string
}

export interface SignUpFormStudentsValues {
  firstName: string
  lastName: string
  birthDate: string
  address: string
  phone: string 
  school: string 
  position: string 
  class: string 
  docType: string 
  docID: string 
  avatar: string 
  gender: string 
  email: string
  password: string
  username: string
}
