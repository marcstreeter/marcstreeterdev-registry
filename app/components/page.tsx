"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Check } from "lucide-react"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/new-york/ui/card"
import { Badge } from "@/registry/new-york/ui/badge"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Switch } from "@/registry/new-york/ui/switch"
import { Checkbox } from "@/registry/new-york/ui/checkbox"
import { Slider } from "@/registry/new-york/ui/slider"
import { Progress } from "@/registry/new-york/ui/progress"
import { Textarea } from "@/registry/new-york/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/registry/new-york/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york/ui/avatar"
import { Separator } from "@/registry/new-york/ui/separator"
import { Skeleton } from "@/registry/new-york/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/new-york/ui/table"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/registry/new-york/ui/breadcrumb"

const CopyButton = ({ text, name }: { text: string; name: string }) => {
  const [copied, setCopied] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [name])
  
  const copyToClipboard = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    // Use a simple fallback approach that doesn't involve promises
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.left = '-9999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    
    try {
      const successful = document.execCommand('copy')
      if (successful) {
        setCopied(true)
        timeoutRef.current = setTimeout(() => {
          setCopied(false)
        }, 2000)
      }
    } catch (err) {
      console.error('CopyButton: Failed to copy text for', name, err)
    } finally {
      document.body.removeChild(textArea)
    }
  }
  
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={copyToClipboard}
      className="h-7 gap-1"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          npx shadcn add {name}
        </>
      )}
    </Button>
  )
}

const ComponentShowcase = ({ 
  name, 
  description, 
  children, 
  installCommand,
  isSelected = false
}: { 
  name: string
  description: string
  children: React.ReactNode
  installCommand: string
  isSelected?: boolean
}) => (
  <Card 
    id={`${name.toLowerCase().replace(/\s+/g, '-')}-showcase`}
    className={`transition-all duration-200 ${isSelected ? 'ring-2 ring-blue-500 border-blue-500 shadow-lg' : ''}`}
  >
    <CardHeader className="pb-3">
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className={`text-lg ${isSelected ? 'text-blue-600' : ''}`}>{name}</CardTitle>
          <CardDescription className="mt-1">{description}</CardDescription>
        </div>
        <CopyButton text={installCommand} name={name.toLowerCase().replace(/\s+/g, '-')} />
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-center min-h-[120px] bg-muted/30 rounded-md p-6">
        {children}
      </div>
    </CardContent>
  </Card>
)

export default function ComponentsPage() {
  
  const [progress, setProgress] = React.useState(33)
  const [sliderValue, setSliderValue] = React.useState([50])
  const [isChecked, setIsChecked] = React.useState(false)
  const [isSwitchOn, setIsSwitchOn] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState("form")
  const [selectedComponent, setSelectedComponent] = React.useState<string | null>(null)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <div className="max-w-6xl mx-auto flex flex-col min-h-screen px-4 py-8 gap-8">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">UI Components</h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive collection of 46+ shadcn/ui components ready to copy and use in your projects.
          </p>
        </div>

        <Alert>
          <AlertTitle>Installation</AlertTitle>
          <AlertDescription>
            Use the copy buttons below to quickly install any component with the shadcn CLI.
            Make sure you have configured your registry URL to point to this custom registry.
          </AlertDescription>
        </Alert>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="form" id="form-tab">Form & Input</TabsTrigger>
          <TabsTrigger value="display" id="display-tab">Display</TabsTrigger>
          <TabsTrigger value="feedback" id="feedback-tab">Feedback</TabsTrigger>
          <TabsTrigger value="navigation" id="navigation-tab">Navigation</TabsTrigger>
        </TabsList>

        <TabsContent value="form" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ComponentShowcase
              name="Button"
              description="Clickable button component with multiple variants"
              installCommand="npx shadcn add button"
              isSelected={selectedComponent === "button"}
            >
              <div className="flex gap-2 flex-wrap">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              name="Input"
              description="Text input field for forms"
              installCommand="npx shadcn add input"
              isSelected={selectedComponent === "input"}
            >
              <div className="w-full max-w-sm space-y-2">
                <Label htmlFor="sample-input">Email</Label>
                <Input id="sample-input" type="email" placeholder="Enter your email" />
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              name="Textarea"
              description="Multi-line text input"
              installCommand="npx shadcn add textarea"
              isSelected={selectedComponent === "textarea"}
            >
              <div className="w-full max-w-sm space-y-2">
                <Label htmlFor="sample-textarea">Message</Label>
                <Textarea id="sample-textarea" placeholder="Enter your message" />
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              name="Select"
              description="Dropdown selection component"
              installCommand="npx shadcn add select"
              isSelected={selectedComponent === "select"}
            >
              <div className="w-full max-w-sm space-y-2">
                <Label>Framework</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              name="Checkbox"
              description="Binary choice input"
              installCommand="npx shadcn add checkbox"
              isSelected={selectedComponent === "checkbox"}
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked={isChecked} onCheckedChange={setIsChecked} />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                </div>
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              name="Switch"
              description="Toggle switch for binary options"
              installCommand="npx shadcn add switch"
              isSelected={selectedComponent === "switch"}
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" checked={isSwitchOn} onCheckedChange={setIsSwitchOn} />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="dark-mode" />
                  <Label htmlFor="dark-mode">Dark mode</Label>
                </div>
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              name="Slider"
              description="Range input for selecting numeric values"
              installCommand="npx shadcn add slider"
              isSelected={selectedComponent === "slider"}
            >
              <div className="w-full max-w-sm space-y-3">
                <Label>Value: {sliderValue[0]}</Label>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                />
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              name="Label"
              description="Text labels for form controls"
              installCommand="npx shadcn add label"
              isSelected={selectedComponent === "label"}
            >
              <div className="space-y-2">
                <Label htmlFor="demo-label">Sample Label</Label>
                <Input id="demo-label" placeholder="Associated input" />
              </div>
            </ComponentShowcase>
          </div>
        </TabsContent>

        <TabsContent value="display" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ComponentShowcase
              name="Card"
              description="Flexible content container"
              installCommand="npx shadcn add card"
              isSelected={selectedComponent === "card"}
            >
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">This is the card content area.</p>
                </CardContent>
              </Card>
            </ComponentShowcase>

            <ComponentShowcase
              name="Badge"
              description="Small status indicators"
              installCommand="npx shadcn add badge"
              isSelected={selectedComponent === "badge"}
            >
              <div className="flex gap-2 flex-wrap">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              name="Avatar"
              description="User profile picture with fallback"
              installCommand="npx shadcn add avatar"
              isSelected={selectedComponent === "avatar"}
            >
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              name="Table"
              description="Data table for structured information"
              installCommand="npx shadcn add table"
              isSelected={selectedComponent === "table"}
            >
              <div className="w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>Inactive</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              name="Separator"
              description="Visual divider between content sections"
              installCommand="npx shadcn add separator"
              isSelected={selectedComponent === "separator"}
            >
              <div className="w-full max-w-sm space-y-4">
                <div>Content above separator</div>
                <Separator />
                <div>Content below separator</div>
              </div>
            </ComponentShowcase>

            <ComponentShowcase
              name="Skeleton"
              description="Loading placeholder animations"
              installCommand="npx shadcn add skeleton"
              isSelected={selectedComponent === "skeleton"}
            >
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </ComponentShowcase>
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ComponentShowcase
              name="Alert"
              description="Important messages and notifications"
              installCommand="npx shadcn add alert"
              isSelected={selectedComponent === "alert"}
            >
              <Alert className="w-full max-w-sm">
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
            </ComponentShowcase>

            <ComponentShowcase
              name="Progress"
              description="Progress indicator for long-running tasks"
              installCommand="npx shadcn add progress"
              isSelected={selectedComponent === "progress"}
            >
              <div className="w-full max-w-sm space-y-2">
                <Label>Progress: {progress}%</Label>
                <Progress value={progress} />
              </div>
            </ComponentShowcase>
          </div>
        </TabsContent>

        <TabsContent value="navigation" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ComponentShowcase
              name="Breadcrumb"
              description="Navigation hierarchy indicator"
              installCommand="npx shadcn add breadcrumb"
              isSelected={selectedComponent === "breadcrumb"}
            >
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </ComponentShowcase>

            <ComponentShowcase
              name="Tabs"
              description="Organize content in tabbed interface"
              installCommand="npx shadcn add tabs"
              isSelected={selectedComponent === "tabs"}
            >
              <Tabs defaultValue="tab1" className="w-full max-w-sm">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-2">
                  <p className="text-sm">Content for tab 1</p>
                </TabsContent>
                <TabsContent value="tab2" className="mt-2">
                  <p className="text-sm">Content for tab 2</p>
                </TabsContent>
              </Tabs>
            </ComponentShowcase>
          </div>
        </TabsContent>
      </Tabs>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Component Index</h2>
        <p className="text-muted-foreground">
          Interactive components demonstrated above (click to jump to section):
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mb-6">
          {[
            { name: "button", tab: "form" },
            { name: "input", tab: "form" },
            { name: "textarea", tab: "form" },
            { name: "select", tab: "form" },
            { name: "checkbox", tab: "form" },
            { name: "switch", tab: "form" },
            { name: "slider", tab: "form" },
            { name: "label", tab: "form" },
            { name: "card", tab: "display" },
            { name: "badge", tab: "display" },
            { name: "avatar", tab: "display" },
            { name: "table", tab: "display" },
            { name: "separator", tab: "display" },
            { name: "skeleton", tab: "display" },
            { name: "alert", tab: "feedback" },
            { name: "progress", tab: "feedback" },
            { name: "breadcrumb", tab: "navigation" },
            { name: "tabs", tab: "navigation" }
          ].map((component) => (
            <button
              key={component.name}
              onClick={() => {
                // Switch to the correct tab using state
                setActiveTab(component.tab)
                setSelectedComponent(component.name)
                // Small delay to allow tab content to render
                setTimeout(() => {
                  const element = document.querySelector(`#${component.name}-showcase`)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  } else {
                    console.log('Navigation: Element not found', `#${component.name}-showcase`)
                  }
                }, 100)
              }}
              className="text-left"
            >
              <Badge variant="outline" className="justify-center w-full hover:bg-accent cursor-pointer">
                {component.name}
              </Badge>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}