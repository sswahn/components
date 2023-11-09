# Components · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/components/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/components)
A collection of reusable React components.  

## Installation

To use these components in your React project, you can install this library via npm.

```bash
npm install @sswahn/components
```  

## Usage
Import the components.
```javascript
import {
  Avatar,
  Checkbox,
  Dropdown,
  Modal,
  Search,
  Sidebar
} from '@sswahn/components'
```  

### Avatar
The Avatar component displays user avatars or profile images. Easily create an avatar element with support for custom user images and badges.
```javascript
<Avatar
  className="custom-avatar"        // Your class for custom styles (optional)
  image="/path/to/user-avatar.jpg" // Path to the user's avatar image
  username="JohnDoe"               // User's username or name
  onClick={handleClick}            // Optional click event handler
  badge={true}                     // Display a pro badge (optional)
/>
```  

### Checkbox
The Checkbox component allows you to create customizable checkboxes with labels.  
```javascript
<Checkbox
  className="custom-checkbox"
  label="Check me"
  checked={isChecked}
  onChange={handleCheckboxChange}
/>
```  

### Dropdown
The Dropdown component provides a simple way to create dropdown menus with various options.  
```javascript
<Dropdown
  className="custom-dropdown"
  text="Select an option"
  options={dropdownOptions}
/>
```   

### Modal
The Modal component allows you to create modal dialogs that can be opened and closed programmatically.  
```javascript
<Modal className="custom-modal" onClose={handleModalClose}>
  {/* Content for the modal */}
</Modal>
```  

### Search
The Search component provides an input field for searching, and it allows you to capture search input changes.  
```javascript
<Search className="custom-search" onChange={handleSearch} placeholder="Search..." />
```  

### Sidebar
The Sidebar component helps you create flexible sidebars with an open and close functionality.  
```javascript
<Sidebar className="custom-sidebar">
  {/* Sidebar content */}
</Sidebar>
```  

## Peer Dependencies
Components requires React as a peer dependency. You should have React installed in your project with a version compatible with this library.  

[React](https://reactjs.org/): ^18.2.0  

## License
Components is [MIT Licensed](https://github.com/sswahn/components/blob/main/LICENSE)
