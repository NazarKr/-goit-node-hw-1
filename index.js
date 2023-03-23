const {program} = require("commander");
// const program = new Command();
const constants = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();
invokeAction(options);

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
          const allContacts = await constants.listContacts();
          return console.log(allContacts);

    case "get":
          const oneContacts = await constants.getContactById(id);
          return console.log(oneContacts);

    case "add":
          const newContacts = await constants.addContact({name,email,phone});
          return console.log(newContacts);

    case "remove":
          const deleteContacts = await constants.removeContact(id);
          return console.log(deleteContacts);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction(argv);
