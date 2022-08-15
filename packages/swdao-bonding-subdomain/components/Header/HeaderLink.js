import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Header.module.scss'

export function HeaderLink({ page, url, isActive, variant = 'nav' }) {
    const key = page.toLowerCase()
    const safeUrl = key == 'bonds' ? '#' : url || `/${key}`
    const textProps =
        variant === 'list'
            ? {
                  textColor: isActive ? 'white' : '#AADCFE',
                  fontSize: 'xl',
                  _hover: { color: 'white', textDecoration: 'underline' },
                  mb: '16px',
              }
            : {}

    return (
        <a key={key} href={safeUrl}>
            <Text
                mb="16px"
                textColor={isActive ? 'white' : '#AADCFE'}
                d="inline-block"
                className={isActive ? styles.activelink : styles.link}
                {...textProps}
                pt="0.35rem"
                fontSize={isActive ? 'xl' : '16px'}
            >
                {page.toUpperCase()}
            </Text>
        </a>
    )
}
