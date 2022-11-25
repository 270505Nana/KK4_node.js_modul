const User = require('../model/User')

module.exports = {
       // all users
       index: async (req, res) => {
              try{
                     const users = await User.find()
                     // const user
                     // menampung data user yang kita ambil dari model
                     if(users.length > 0){
                            res.status(200).json({
                                   status: true,
                                   data: users,
                                   method: req.method,
                                   url: req.url
                            })
                     }else{
                            res.json({
                                   status: false,
                                   message: "Data masih kosong"
                            })
                     }
                    
              }catch(error){
                     res.status(400).json({success: false})
              }
             
       },

       // detail user
       show: async (req, res) => {
              try {
                     const user = await User.findById(req.params.id)
                     res.json({
                     status: true,
                     data: user,
                     method: req.method,
                     url: req.url,
                     message: "Data berhasil didapat"
                     })
  
          } catch (error) {
              res.status(400).json({succes:false, message: error})
          }
          
       },

       store: async (req, res) => {
              try {
                     const user = await User.create(req.body)
                     res.status(200).json({
                     status: true,
                     data: user,
                     method: req.method,
                     url: req.url,
                     message: "Data berhasil ditambahkan"
                     })
              } catch (error) {
              res.status(400).json({succes:false, message: error})
              }       
       },
      update: async (req, res) => {
              try {
                     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                     new: true,
                     runValidators: true
                     })
                     res.json({
                     status: true,
                     data: user,
                     method: req.method,
                     url: req.url,
                     message: "Data berhasil diubah"
                     })
  
          } catch (error) {
              res.status(400).json({succes:false, message: error})
          }
          
       },
        delete: async (req, res) => {
              // ga perlu bikin var karena data akan langsng dihapus
          try {
              await User.findByIdAndDelete(req.params.id)
              res.json({
                  status: true,
                  method: req.method,
                  url: req.url,
                  message: "Data berhasil dihapus"
              })
          } catch (error) {
              res.status(400).json({succes:false, message: error})
          }
          
       }      
}