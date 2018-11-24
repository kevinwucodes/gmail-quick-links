import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library'
import Link from '../Link'
import {debug} from 'util'

//we mock getComputedStyle because getComputedStyle is returned from window once we
//are inside Gmail
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: prop => {
      return ''
    }
  })
})

afterEach(() => {
  cleanup()
})

test('renders simple Link', () => {
  const component = <Link name="hello" urlHash="some-url-here" />
  const {getByText} = render(component)

  const link = getByText(/hello/)

  expect(link).toHaveClass('n0')
  expect(link).toHaveAttribute('href', 'some-url-here')
  expect(link).toHaveAttribute('title', 'some-url-here')
})

test('renders global Link type with the globe glyph', () => {
  const component = <Link type="global" />
  const {getByTitle} = render(component)

  const theSpan = getByTitle('toggle global/single')

  expect(theSpan).toHaveClass('glyph global')
})

test('renders account Link type with the circle glyph', () => {
  const component = <Link type="account" />
  const {getByTitle} = render(component)

  const theSpan = getByTitle('toggle global/single')

  expect(theSpan).toHaveClass('glyph circle')
})

// test('click on globe', () => {
//   const component = <Link type="global" onClickGlobeCircle={}/>
//   const {getByTitle, debug} = render(component)

//   const theSpan = getByTitle('toggle global/single')

//   debug(theSpan)

//   expect(theSpan).toHaveClass('glyph global')

//   fireEvent.click(theSpan)

//   debug(theSpan)

// })

//TODO: write test for clicking on globe/circle

//TODO: write test for window.getComputedStyle
// console.log(window.getComputedStyle())
