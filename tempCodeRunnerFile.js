
  const randAdj = adj[Math.floor(Math.random() * adj.length)];
  const randNoun = noun[Math.floor(Math.random() * noun.length)];
  
  res.render("index.ejs",{
    adjective: randAdj,
    noun: randNoun,
  });
  //Then:
  //1. You should random