const multer = require('multer');
const { filtro } = require('../controllers/uploads');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({

  //destination: path.join(__dirname,'./assets/files'),
  destination: './assets/files',
  filename: (_req, file, cb) => {
      cb(null, uuidv4() + path.extname(file.originalname));
      }
});

const uploadP = () => {
  const uploadR = multer({
    storage: storage,
    fileFilter: filtro
  });
  //const upload = uploadR.single('file');
  const upload = uploadR.array('file',10);
  return upload;
}
module.exports = {
  uploadP
}
// const upload = () =>{

//     const storage = multer.diskStorage({
//         destination: './assets/files',
//         filename: function (_req, file, cb) {
//           const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//           var extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
//           cb(null,uniqueSuffix + extension);
//         }
//       })
      
//       const upload = multer({ storage: storage }).single('file');
//       return upload;
// }
