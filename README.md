# Components  
A collection of reusable React components.  

## Installation

To use these components in your React project, you can install this library via npm.

```bash
npm install your-library-name
```

## Usage
Import the components.
```javascript
import { Checkbox, Dropdown, Modal, Search, Sidebar } from '@sswahn/components'
```  

### Checkbox
The Checkbox component allows you to create customizable checkboxes with labels.  
```javascript
<Checkbox label="Check me" checked={isChecked} onChange={handleCheckboxChange} />
```  

### Dropdown
The Dropdown component provides a simple way to create dropdown menus with various options.  
```javascript
<Dropdown text="Select an option" options={dropdownOptions} />
```  

### Modal
The Modal component allows you to create modal dialogs that can be opened and closed programmatically.  
```javascript
<Modal onClose={handleModalClose}>
  {/* Content for the modal */}
</Modal>
```  

### Search
The Search component provides an input field for searching, and it allows you to capture search input changes.  
```javascript
<Search onChange={handleSearch} placeholder="Search..." />
```  

### Sidebar
The Sidebar component helps you create flexible sidebars with an open and close functionality.  
```javascript
<Sidebar>
  {/* Sidebar content */}
</Sidebar>
```

