db.Bibliografia.find().snapshot().forEach( function (el) {
el.Bibliografia = el.Bibliografia.split(' ');
db.Bibliografia4.save(el);
});