db.ProducaoX.aggregate([
   {$match:{"_id.word":/^S/i}},
   {$group:{_id:"$_id.word", 
       occurrences: {$push: 
       {doc:"$_id.doc", field:"$_id.field"}},
       score:{$sum:"$value"}
       }}
       ,{$out:"producao2"}]
)