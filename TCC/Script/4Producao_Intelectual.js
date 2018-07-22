db.Producao.find().snapshot().forEach( function (el) {
el.Producao = el.Producao.split(' ');
db.temp.save(el);
});