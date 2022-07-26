const express=require('express')
const api=express()
const path=require('path')
const port=3000
api.get("/",(req,res) => (res.send("Hell Nomena")))
api.listen(port,()=>console.log("notre serveur va demarer sur le http://localhost:"+port))


// api.get("/api/produit/1",(req,res) =>(res.send("l information sur le produit n 1")))

//api.get("/api/produit/:id",(req,res) =>{
    //(res.send("l information sur le produit n"+req.params.id))
//}
//)
api.get("/api/produit/:id",(req,res) =>{
    const id = parseInt(req.params.id)
    const produit = produits.find (produit =>produit.id===id)
    (res.send("le nom du produit demander est "+produit.nom))
}
)

api.use(express.static (path.join(__dirname+'/css')))
//api.use(express.static (__dirname ,'images'))
// api.use(express.static (__dirname ,'font'))
// api.use(express.static (__dirname ,'js'))

api.get("/jarvis/page1.html",(req,res)=>{
    (res.sendFile(__dirname + '/page1.html'))
})
api.get("/jarvis/page2.html",(req,res)=>{
    (res.sendFile(__dirname + '/page2.html'))
})
api.get("/jarvis/page3.html",(req,res)=>{
    (res.sendFile(__dirname + '/page3.html'))
})  
api.get("/jarvis/page4.html",(req,res)=>{
    (res.sendFile(__dirname + '/page4.html'))
})
api.get("/jarvis/page5.html",(req,res)=>{
    (res.sendFile(__dirname + '/page5.html'))
})
api.get("/jarvis/page6.html",(req,res)=>{
    (res.sendFile(__dirname + '/page6.html'))
})

api.get("/jarvis/page7.html",(req,res)=>{
    (res.sendFile(__dirname + '/page7.html'))
})
api.get("/jarvis/page8.html",(req,res)=>{
    (res.sendFile(__dirname + '/page8.html'))
})
api.get("/jarvis/page9.html",(req,res)=>{
    (res.sendFile(__dirname + '/page9.html'))
})
api.get("/jarvis/page10.html",(req,res)=>{
    (res.sendFile(__dirname + '/page10.html'))
})
api.get("/jarvis/page11-16.html",(req,res)=>{
    (res.sendFile(__dirname + '/page11-16.html'))
})
api.get("/jarvis/page18.html",(req,res)=>{
    (res.sendFile(__dirname + '/page18.html'))
})
api.get("/jarvis/page19.html",(req,res)=>{
    (res.sendFile(__dirname + '/page19.html'))
})
api.get("/jarvis/sing-out.html",(req,res)=>{
    (res.sendFile(__dirname + '/sign-out.html'))
})

