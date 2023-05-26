//  @description for all Contacts
// @route GET /api/contacts
// @access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};
//  @description create new Contacts
// @route POST/api/contacts
// @access public
const createContact = (req, res) => {
  console.log(req.body)
  const {name,email,phone} =req.body;
  if(!name||!email ||!phone){
    res.status(400);
    throw new Error('All fields are mandatory');
  }
  res.status(201).json({ message: "Create Contacts" });
};
//  @description get Contacts
// @route GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contacts ${req.params.id}` });
};

//  @description update Contacts
// @route PUT /api/contacts//:id
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contacts ${req.params.id}` });
};
//  @description delete Contacts
// @route DELETE/api/contacts
// @access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contacts ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  deleteContact,
  updateContact,
};
