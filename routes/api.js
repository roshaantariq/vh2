// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const Word = require('../models/Words')

router.get('/getWord',(req,res)=>{
	const query = req.query

	Word.find(query).then(words=>{
		res.json({
			confirmation: 'success',
			data: words
		})
	}).catch(err=>{
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.post('/setWord',(req,res)=>{

	Word.create(req.body).then(word=>{
		res.json({
			confirmation: 'success',
			data: word
		})
	}).catch(err=>{
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

module.exports = router
