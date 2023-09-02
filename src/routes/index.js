import express from 'express'
import { config } from '../utils/main.js'

const router = express.Router()
const sections = config.sections

router.use(function (req, res, next) {
  next()
})

router.get('/', function(req, res, next) {
  const home = sections.home
  console.log(home)
  res.render(home.template, home.metadata)
})

router.get('/index', function(req, res, next) {
  const home = sections.home
  console.log(home)
  res.render(home.template, home.metadata)
})

router.get('/about', function (req, res, next) {
  const about = sections.about
  res.render(about.template, about.metadata)
})

router.get('/menu', function (req, res, next) {
  const menu = sections.menu
  res.render(menu.template, menu.metadata)
})

router.get('/about.html', function (req, res, next) {
  const about = sections.about
  res.render(about.template, about.metadata)
})

router.get('/flavors', function (req, res, next) {
  const flavors = sections.flavors
  res.render(flavors.template, flavors.metadata)
})

router.get('/flavors.html', function (req, res, next) {
  const flavors = sections.flavors
  res.render(flavors.template, flavors.metadata)
})

router.get('/faq', function (req, res, next) {
  const faq = sections.faq
  res.render(faq.template, faq.metadata)
})

router.get('/contact', function (req, res, next) {
  const contact = sections.contact
  res.render(contact.template, contact.metadata)
})

router.get('/contact.html', function (req, res, next) {
  const contact = sections.contact
  res.render(contact.template, contact.metadata)
})

router.get('/parties', function (req, res, next) {
  const parties = sections.parties
  res.render(parties.template, parties.metadata)
})

router.get('/parties.html', function (req, res, next) {
  const parties = sections.parties
  res.render(parties.template, parties.metadata)
})

export default router
