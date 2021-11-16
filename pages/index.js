import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li><Link href='/a' as='/a_url'><a>a</a></Link></li>
    <li><Link href='/b' as='/b_url'><a>b</a></Link></li>
  </ul>
)