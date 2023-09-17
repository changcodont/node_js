

import  express   from 'express';

import { engine } from 'express-handlebars';

const app = express()
const port = 3000//tạo đg dẫn 3000


app.use(express.static('src/public/'));//lấy ảnh
//HTTp logger
app.engine('hbs',engine(
  {extname: '.hbs'}//đổi tên từ handlebars thành đuôi .hbs
));
app.set('view engine','hbs');
app.set('views','./src/resources/views');



//tuyến đường
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

