
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          name: "Shem",
          message: "Nulla ut erat id mauris vulputate elementum. Nullam varius."
        },
        {
          name: "Bernice",
          message:
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis."
        },
        { name: "Hurlee", message: "Etiam justo." },
        {
          name: "Kerianne",
          message: "Duis consequat dui nec nisi volutpat eleifend."
        },
        {
          name: "Andy",
          message: "Duis consequat dui nec nisi volutpat eleifend."
        },
        {
          name: "Emilie",
          message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
          name: "Jayme",
          message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
          name: "Jeni",
          message: "Vestibulum ac est lacinia nisi venenatis tristique."
        },
        {
          name: "Etty",
          message:
            "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
        },
        {
          name: "Lori",
          message:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
        },
        {
          name: "Lennard",
          message:
            "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
        },
        { name: "Trudi", message: "Sed ante. Vivamus tortor." },
        {
          name: "Charlot",
          message: "Vivamus tortor. Duis mattis egestas metus."
        },
        { name: "Etty", message: "Fusce posuere felis sed lacus." },
        { name: "Julietta", message: "Phasellus in felis." },
        { name: "Mikkel", message: "Aliquam erat volutpat." },
        { name: "Vittoria", message: "Vivamus tortor." },
        { name: "Alexander", message: "Duis aliquam convallis nunc." },
        {
          name: "Lannie",
          message:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue."
        },
        {
          name: "Mendy",
          message:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
        },
        {
          name: "Dell",
          message: "Pellentesque at nulla. Suspendisse potenti."
        },
        { name: "Luciana", message: "Etiam faucibus cursus urna. Ut tellus." },
        { name: "Gianna", message: "Quisque ut erat." },
        {
          name: "Armand",
          message: "In quis justo. Maecenas rhoncus aliquam lacus."
        },
        {
          name: "Tabbi",
          message:
            "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
        },
        {
          name: "Nonah",
          message: "In quis justo. Maecenas rhoncus aliquam lacus."
        },
        { name: "Forest", message: "Donec ut dolor." },
        {
          name: "Lyman",
          message: "Duis consequat dui nec nisi volutpat eleifend."
        },
        {
          name: "Brandy",
          message: "Duis bibendum. Morbi non quam nec dui luctus rutrum."
        },
        {
          name: "Horatio",
          message:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus."
        },
        { name: "Bernadina", message: "Maecenas tincidunt lacus at velit." },
        {
          name: "Phillida",
          message:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst."
        },
        { name: "Glori", message: "Vivamus tortor." },
        { name: "Buffy", message: "Maecenas tincidunt lacus at velit." },
        { name: "Klement", message: "Proin eu mi. Nulla ac enim." },
        {
          name: "Theodosia",
          message:
            "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti."
        },
        { name: "Aurelie", message: "Aliquam non mauris." },
        { name: "Daryl", message: "Etiam justo. Etiam pretium iaculis justo." },
        {
          name: "Carilyn",
          message:
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue."
        },
        {
          name: "Baxy",
          message: "Praesent id massa id nisl venenatis lacinia."
        },
        {
          name: "Beaufort",
          message: "Phasellus id sapien in sapien iaculis congue."
        },
        {
          name: "Lexy",
          message:
            "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue."
        },
        { name: "Aura", message: "Phasellus sit amet erat. Nulla tempus." },
        {
          name: "Cletis",
          message:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst."
        },
        { name: "Prinz", message: "Proin risus." },
        {
          name: "Kellina",
          message:
            "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
        },
        {
          name: "Keslie",
          message:
            "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
        },
        { name: "Kania", message: "Aliquam non mauris. Morbi non lectus." },
        { name: "Taite", message: "Duis at velit eu est congue elementum." },
        { name: "Florette", message: "Sed ante. Vivamus tortor." }
      ]);
    });
};
