const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
  // inserir dados na teabela
      await saveOrphanage(db,   {
        lat: "-23.543411",
        lng: "-47.13388",

        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "989898",
        images: [
          "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",

          "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",

        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horários de visita Das 08h até as 18h",
        open_on_weekends: "0"
      }
    )

   const selectedOrphanages  = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar um so orfanato

  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2" ')
    console.log(orphanage)
})