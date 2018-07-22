// db.Producao3xx.save(
db.ProducaoX.aggregate(
{$limit : 427100},
  {
    $group:{
      _id:"$_id.word",
      occurences:{ $push:{doc:"$_id.doc",
          field:"$_id.field"}},
      score:{$sum:"$value"}

     }
   }      
//    )
    ,{ $out:"Producao3sss" })

