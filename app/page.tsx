"use client"

import * as React from "react"
import Link from "next/link"
// import { OpenInV0Button } from "@/components/open-in-v0-button"
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world"
// Removed async components that cause promise suspension issues in client components
// import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form"
// import PokemonPage from "@/registry/new-york/blocks/complex-component/page"
// import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/new-york/ui/card"
import { Badge } from "@/registry/new-york/ui/badge"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Switch } from "@/registry/new-york/ui/switch"
import { Checkbox } from "@/registry/new-york/ui/checkbox"
import { Slider } from "@/registry/new-york/ui/slider"
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  const [sliderValue, setSliderValue] = React.useState([50])
  const [isChecked, setIsChecked] = React.useState(false)
  const [isSwitchOn, setIsSwitchOn] = React.useState(false)

  return (
    <div className="max-w-4xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">MarcStreeterDev Registry</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A personal shadcn/ui component registry featuring 46+ carefully crafted UI components 
          and example blocks for modern React applications.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="outline" asChild>
            <Link href="/components">Browse Components</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">About Registry</Link>
          </Button>
          <Button asChild>
            <Link href="https://github.com/marcstreeter/marcstreeterdev-registry" target="_blank">
              View Repository
            </Link>
          </Button>
        </div>
      </header>
    </div>
  )
}
