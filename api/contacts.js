const express = require("express");
const router = express.Router();
const contactsTasks = require("../controller/contacts");

router.get("/", contactsTasks.listContacts);

router.get("/:contactId", contactsTasks.getContactById);

router.post("/", contactsTasks.createContact);

router.put("/:contactId", contactsTasks.updateContact);

router.delete("/:contactId", contactsTasks.removeContact);

router.patch("/:contactId/favorite", contactsTasks.updateContactStatus);

module.exports = router;