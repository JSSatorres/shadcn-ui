import React from 'react'
import Link from 'next/link'
import { mainMenuLinks } from './mainMenuConstants'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar'

export default function MainMenu () {
  return (
    <Menubar>
      {mainMenuLinks.map(({ label, route }) => (
        <MenubarMenu key={route}>
          <MenubarTrigger>
            <Link href={route}>
              {label}
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      ))}
    </Menubar>
  )
}
