# @brawlik/types

Auto-generated TypeScript typings for the official [Brawl Stars API](https://developer.brawlstars.com)

> A complete set of types for every API resource: players, clubs, brawlers, events, leaderboards, battle logs, and more.  
> Built for modern TypeScript projects with full **autocomplete** and **type safety**.

## 🚀 Features

- ✅ **Full coverage** of Brawl Stars API (based on swagger.yaml)
- ⚡ **Instant IDE autocomplete** and inline docs (soon)
- 🔄 **Auto-generated types** — always up to date 

## 📦 Installation

### ⚠️ Bun-only (for now)

> **This package currently supports only [Bun](https://bun.sh).**  
> Support for npm and Node.js may be added in the future.

Install it via:

```bash
> bun add @brawlik/types
```

## ⚙️ Regenerating Types

Types are generated from swagger.yaml. After updating spec:

```bash
bun i
bun run generate
```

## 🧩 Example of use

Simple example of use @brawlik/types, type-safety wrapper for BrawlStars API 

```typescript
import type { Player } from '@brawlik/types'

class BrawlAPI {
    token: string

    constructor(token: string) {
        this.token = token
    }

    async request<T>(endpoint: string): Promise<T> {
        const res = await fetch(`https://api.brawlstars.com/v1/${endpoint}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        })

        if (!res.ok) throw new Error(`Error: ${await res.text()}`)

        const data = await res.json()

        return data as T
    }

    /**
    * fetch user account by tag from game.
    * @param {string} tag from game
    */
    async fetchPlayer(tag: string) {
        const response = await this.request<Player>(`players/%23${tag}`)

        return response
    }

    // and other methods...
}

const API = new BrawlAPI('yourToken')

const player = await API.fetchPlayer('JGVVVQ82Q')
console.log(player.trophies) // 13390
```