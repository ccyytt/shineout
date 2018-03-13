/**
 * cn - 图标
 * en - Icon
 */
import React, { Fragment } from 'react'
import { Button } from 'shineout'
import FontAwesome from '../Icon/FontAwesome'

export default function () {
  return (
    <Fragment>
      <Button size="small" type="primary"><FontAwesome name="home" /> Small</Button>
      <Button type="primary"><FontAwesome name="home" /> Default</Button>
      <Button size="large" type="primary"><FontAwesome name="home" /> Large</Button>
    </Fragment>
  )
}