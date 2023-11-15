# Components · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/components/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/components) ![Weekly Downloads](https://img.shields.io/npm/dw/@sswahn/components)
A collection of customizable, reusable React components.  

## Features
- **Checkbox Component**: Create customizable checkboxes with labels using the Checkbox component, featuring options for custom classes, checked status, and change event handling.
- **Dropdown Component**: Easily generate dropdown menus with various options using the Dropdown component, providing customization through a custom class and a list of options with labels and associated click handlers.
- **Modal Component**: Utilize the Modal component to effortlessly create modal dialogs that can be programmatically opened and closed, with customizable appearances and onClose event handling.
- **Search Component**: Implement search functionality with the Search component, offering an input field for capturing search input changes, along with customization options such as a custom class and a placeholder.
- **Sidebar Component**: Create flexible sidebars with open and close functionality using the Sidebar component, featuring customization through a custom class, open status control, and an onClose event handler.


## Installation
Using npm.
```bash
npm install @sswahn/components
```  

## Usage
Import the components.
```javascript
import {
  Checkbox,
  Dropdown,
  Modal,
  Search,
  Sidebar
} from '@sswahn/components'
```

### Checkbox
The `Checkbox` component allows you to create customizable checkboxes with labels.  
```javascript
<Checkbox
  className="custom-checkbox"
  label="Check me"
  checked={isChecked}
  onChange={handleCheckboxChange}
/>
```  

### Dropdown
The `Dropdown` component provides a simple way to create dropdown menus with various options.  
```javascript
const dropdownOptions = [
  {label: 'option one', onClick: handleOptionOne},
  {label: 'option two', onClick: handleOptionTwo},
  {label: 'option three', onClick: handleOptionThree}
]
<Dropdown
  className="custom-dropdown"
  text="Select an option"
  options={dropdownOptions}
/>
```   

### Modal
The `Modal` component allows you to create modal dialogs that can be opened and closed programmatically.  
```javascript
<Modal className="custom-modal" open={isOpen} onClose={handleCloseModal}>
  {/* Content for the modal */}
</Modal>
```  

### Search
The `Search` component provides an input field for searching, and it allows you to capture search input changes.  
```javascript
<Search className="custom-search" onChange={handleSearch} placeholder="Search..." />
```  

### Sidebar
The `Sidebar` component helps you create flexible sidebars with an open and close functionality.  
```javascript
<Sidebar className="custom-sidebar" open={isOpen} onClose={handleCloseSidebar}>
  {/* Sidebar content */}
</Sidebar>
```  

## Peer Dependencies
Components requires React as a peer dependency. You should have React installed in your project with a version compatible with this library.  

[React](https://reactjs.org/): ^18.2.0  

## Related
- [@sswahn/social](https://www.npmjs.com/package/@sswahn/social): A collection of customizable, reusable social components for use with React.
- [@sswahn/login](https://www.npmjs.com/package/@sswahn/login): A versatile authentication library of React components designed to streamline the user authentication processes.
- [@sswahn/router](https://www.npmjs.com/package/@sswahn/router): A lightweight and flexible router for client-side routing in React.

## License
Components is [MIT Licensed](https://github.com/sswahn/components/blob/main/LICENSE)
