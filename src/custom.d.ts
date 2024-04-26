// Create a file (e.g., custom.d.ts) in your project

// Declare the module for custom elements
declare module JSX {
  interface IntrinsicElements {
    // Define the type for ion-icon
    "ion-icon": any; // You can use 'any' for simplicity, or provide a more specific type
  }
}
