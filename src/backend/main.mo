import List "mo:core/List";

actor {
  let contacts = List.empty<{ name : Text; email : Text; phone : ?Text; message : Text }>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : ?Text, message : Text) : async Bool {
    contacts.add({ name; email; phone; message });
    true;
  };

  public query ({ caller }) func getAllContacts() : async [{ name : Text; email : Text; phone : ?Text; message : Text }] {
    contacts.toArray();
  };
};
