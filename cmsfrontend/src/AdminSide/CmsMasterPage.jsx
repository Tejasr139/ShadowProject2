// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// const CmsMasterPage = () => {
//   const [content, setContent] = useState({
//     id: 0,
//     pageTitle: '',
//     description: '',
//     updatedOn: '',
//     updatedBy: ''
//   });
//   const [contentList, setContentList] = useState([]); // new state variable for content list

//   useEffect(() => {
//     fetchContent();
//   }, []);

//   const fetchContent = async () => {
//     const response = await axios.get('https://localhost:7296/api/ContentMaster');
//     setContentList(response.data); // update contentList state
//   };

//   const handleInputChange = (event) => {
//     setContent({ ...content, [event.target.name]: event.target.value });
//   };

//   const handleEditorChange = (value) => {
//     setContent({ ...content, description: value });
//   };

//   const handleSaveContent = async (event) => {
//     event.preventDefault();
//     if (content.id === 0) {
//       await axios.post('https://localhost:7296/api/ContentMaster', content);
//     } else {
//       await axios.put(`https://localhost:7296/api/ContentMaster/${content.id}`, content);
//     }
//     fetchContent();
//     setContent({
//       id: 0,
//       pageTitle: '',
//       description: '',
//       updatedOn: '',
//       updatedBy: ''
//     });
//   };

//   const handleEditContent = async (id) => {
//     const response = await axios.get(`https://localhost:7296/api/ContentMaster/${id}`);
//     setContent(response.data);
//   };

//   const handleDeleteContent = async (id) => {
//     await axios.delete(`https://localhost:7296/api/ContentMaster/${id}`);
//     fetchContent();
//   };

//   return (
//     <div>
//       <h2>CMS Master Page</h2>
//       <form onSubmit={handleSaveContent}>
//         <div>
//           <label htmlFor="pageTitle">Page Title:</label>
//           <input type="text" name="pageTitle" value={content.pageTitle} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <ReactQuill value={content.description} onChange={handleEditorChange} />
//         </div>
//         <button type="submit">Save</button>
//       </form>
//       <h2>Content List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Page Title</th>
//             <th>Description</th>
//             <th>Updated On</th>
//             <th>Updated By</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contentList.map((item) => (
//             <tr key={item.id}>
//               <td>{item.pageTitle}</td>
//               <td dangerouslySetInnerHTML={{ __html: item.description }}></td>
//               <td>{item.updatedOn}</td>
//               <td>{item.updatedBy}</td>
//               <td>
//                 <button onClick={() => handleEditContent(item.id)}>Edit</button>
//                 <button onClick={() => handleDeleteContent(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CmsMasterPage;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// const CmsMasterPage = () => {
//   const [content, setContent] = useState({
//     id: 0,
//     pageTitle: '',
//     description: '',
//     updatedOn: '',
//     updatedBy: ''
//   });
//   const [contentList, setContentList] = useState([]);

//   useEffect(() => {
//     fetchContent();
//   }, []);

//   const fetchContent = async () => {
//     try {
//       const response = await axios.get('https://localhost:7296/api/ContentMaster');
//       setContentList(response.data);
//     } catch (error) {
//       console.error('Error fetching content:', error);
//     }
//   };

//   const handleInputChange = (event) => {
//     setContent({ ...content, [event.target.name]: event.target.value });
//   };

//   const handleEditorChange = (value) => {
//     setContent({ ...content, description: value });
//   };

//   const handleSaveContent = async (event) => {
//     event.preventDefault();
//     try {
//       if (content.id === 0) {
//         await axios.post('https://localhost:7296/api/ContentMaster', content);
//       } else {
//         await axios.put(`https://localhost:7296/api/ContentMaster/${content.id}`, content);
//       }
//       fetchContent();
//       clearForm();
//     } catch (error) {
//       console.error('Error saving content:', error);
//     }
//   };

//   const handleEditContent = async (id) => {
//     try {
//       const response = await axios.get(`https://localhost:7296/api/ContentMaster/${id}`);
//       setContent(response.data);
//     } catch (error) {
//       console.error('Error editing content:', error);
//     }
//   };

//   const handleDeleteContent = async (id) => {
//     try {
//       await axios.delete(`https://localhost:7296/api/ContentMaster/${id}`);
//       fetchContent();
//       clearForm();
//     } catch (error) {
//       console.error('Error deleting content:', error);
//     }
//   };

//   const clearForm = () => {
//     setContent({
//       id: 0,
//       pageTitle: '',
//       description: '',
//       updatedOn: '',
//       updatedBy: ''
//     });
//   };

//   return (
//     <div>
//       <h2>CMS Master Page</h2>
//       <form onSubmit={handleSaveContent}>
//         <div>
//           <label htmlFor="pageTitle">Page Title:</label>
//           <input type="text" name="pageTitle" value={content.pageTitle} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <ReactQuill value={content.description} onChange={handleEditorChange} />
//         </div>
//         <button type="submit">Save</button>
//       </form>
//       <h2>Content List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Page Title</th>
//             <th>Description</th>
//             <th>Updated On</th>
//             <th>Updated By</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contentList.map((item) => (
//             <tr key={item.id}>
//               <td>{item.pageTitle}</td>
//               <td dangerouslySetInnerHTML={{ __html: item.description }}></td>
//               <td>{item.updatedOn}</td>
//               <td>{item.updatedBy}</td>
//               <td>
//                 <button onClick={() => handleEditContent(item.id)}>Edit</button>
//                 <button onClick={() => handleDeleteContent(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CmsMasterPage;




// //FOR GET ENOUGH


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CmsMasterPage = () => {
//   const [latestContent, setLatestContent] = useState(null);

//   useEffect(() => {
//     fetchLatestContent();
//   }, []);

//   const fetchLatestContent = async () => {
//     try {
//       const response = await axios.get('https://localhost:7296/api/ContentMaster');
//       if (response.data.length > 1) {
//         // Assuming the backend returns data in chronological order (oldest to newest by id)
//         const secondInsertedItem = response.data[1];
//         setLatestContent(secondInsertedItem);
//       } else if (response.data.length === 1) {
//         // If there is only one item, display the first item
//         const firstInsertedItem = response.data[0];
//         setLatestContent(firstInsertedItem);
//       }
//     } catch (error) {
//       console.error('Error fetching content:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Second Inserted Content</h2>
//       {latestContent ? (
//         <div>
//           <h3>{latestContent.pageTitle}</h3>
//           <p>{latestContent.description}</p>
//           <p>Updated on: {latestContent.updatedOn}</p>
//           <p>Updated by: {latestContent.updatedBy}</p>
//         </div>
//       ) : (
//         <p>No content available</p>
//       )}
//     </div>
//   );
// };

// export default CmsMasterPage;









// //For GEt AND POST

// import React, { useState } from 'react';
// import axios from 'axios';

// const CmsMasterPage = () => {
//   const [pageTitle, setPageTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [updatedBy, setUpdatedBy] = useState(''); // State for UpdatedBy
//   const [latestContent, setLatestContent] = useState(null);
//   const [error, setError] = useState('');

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const newContent = { pageTitle, description, updatedBy }; // Include updatedBy in the newContent object
//       const response = await axios.post('https://localhost:7296/api/ContentMaster', newContent);
//       setLatestContent(response.data); // Assuming backend returns the newly added content
//       setPageTitle('');
//       setDescription('');
//       setUpdatedBy('');
//       setError('');
//     } catch (error) {
//       console.error('Error adding content:', error);
//       if (error.response && error.response.data) {
//         console.error('Error response:', error.response.data); // Log detailed error response
//         const { errors } = error.response.data;
//         if (errors) {
//           const errorMessage = Object.values(errors).join('\n');
//           setError(errorMessage); // Display concatenated error messages
//         } else {
//           setError('Failed to add content. Please try again later.'); // Generic error message
//         }
//       } else {
//         setError('Failed to add content. Please try again later.'); // Generic error message
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Content</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <label htmlFor="pageTitle">Page Title:</label>
//           <input type="text" id="pageTitle" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} required />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
//         </div>
//         <div>
//           <label htmlFor="updatedBy">Updated By:</label>
//           <input type="text" id="updatedBy" value={updatedBy} onChange={(e) => setUpdatedBy(e.target.value)} required />
//         </div>
//         <button type="submit">Add Content</button>
//       </form>

//       {error && <p>{error}</p>} {/* Display error message if there's any */}
      
//       {latestContent && (
//         <div>
//           <h3>Latest Content Added</h3>
//           <p>Page Title: {latestContent.pageTitle}</p>
//           <p>Description: {latestContent.description}</p>
//           <p>Updated on: {latestContent.updatedOn}</p>
//           <p>Updated by: {latestContent.updatedBy}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CmsMasterPage;






// //FOR POSTING GET AND DELETE METHODS



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CmsMasterPage = () => {
//   const [pageTitle, setPageTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [updatedBy, setUpdatedBy] = useState('');
//   const [latestContent, setLatestContent] = useState(null);
//   const [error, setError] = useState('');
//   const [deletedContentId, setDeletedContentId] = useState(null);
//   const [deleteId, setDeleteId] = useState('');

//   useEffect(() => {
//     fetchLatestContent();
//   }, [deletedContentId]); // Update content list when a deletion occurs

//   const fetchLatestContent = async () => {
//     try {
//       const response = await axios.get('https://localhost:7296/api/ContentMaster');
//       if (response.data.length > 0) {
//         // Assuming the backend returns data in chronological order (oldest to newest by id)
//         const latestItem = response.data[response.data.length - 1];
//         setLatestContent(latestItem);
//       } else {
//         setLatestContent(null);
//       }
//     } catch (error) {
//       console.error('Error fetching content:', error);
//     }
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const newContent = { pageTitle, description, updatedBy };
//       const response = await axios.post('https://localhost:7296/api/ContentMaster', newContent);
//       setLatestContent(response.data); // Assuming backend returns the newly added content
//       setPageTitle('');
//       setDescription('');
//       setUpdatedBy('');
//       setError('');
//     } catch (error) {
//       console.error('Error adding content:', error);
//       if (error.response && error.response.data) {
//         console.error('Error response:', error.response.data);
//         const { errors } = error.response.data;
//         if (errors) {
//           const errorMessage = Object.values(errors).join('\n');
//           setError(errorMessage);
//         } else {
//           setError('Failed to add content. Please try again later.');
//         }
//       } else {
//         setError('Failed to add content. Please try again later.');
//       }
//     }
//   };

//   const handleDeleteContent = async () => {
//     try {
//       const response = await axios.delete(`https://localhost:7296/api/ContentMaster/${deleteId}`);
//       setDeletedContentId(deleteId); // Trigger useEffect to update content list after deletion
//       setDeleteId(''); // Clear deleteId after successful deletion
//     } catch (error) {
//       console.error('Error deleting content:', error);
//       setError('Failed to delete content. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Content</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <label htmlFor="pageTitle">Page Title:</label>
//           <input type="text" id="pageTitle" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} required />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
//         </div>
//         <div>
//           <label htmlFor="updatedBy">Updated By:</label>
//           <input type="text" id="updatedBy" value={updatedBy} onChange={(e) => setUpdatedBy(e.target.value)} required />
//         </div>
//         <button type="submit">Add Content</button>
//       </form>

//       {error && <p>{error}</p>}

//       {latestContent && (
//         <div>
//           <h3>Latest Content Added</h3>
//           <p>Page Title: {latestContent.pageTitle}</p>
//           <p>Description: {latestContent.description}</p>
//           <p>Updated on: {latestContent.updatedOn}</p>
//           <p>Updated by: {latestContent.updatedBy}</p>
//         </div>
//       )}

//       <h2>Delete Content by ID</h2>
//       <div>
//         <label htmlFor="deleteId">Enter ID to Delete:</label>
//         <input type="text" id="deleteId" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
//         <button onClick={handleDeleteContent}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default CmsMasterPage;












import React, { useState } from 'react';
import axios from 'axios';

const CmsMasterPage = () => {
  const [pageTitle, setPageTitle] = useState('');
  const [description, setDescription] = useState('');
  const [updatedBy, setUpdatedBy] = useState('');
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const newContent = { pageTitle, description, updatedBy };
      const response = await axios.post('https://localhost:7296/api/ContentMaster', newContent);
      console.log('Response after POST:', response.data); // Logging response data
      setPageTitle('');
      setDescription('');
      setUpdatedBy('');
      setError('');
    } catch (error) {
      console.error('Error adding content:', error);
      if (error.response && error.response.data) {
        console.error('Error response:', error.response.data);
        const { errors } = error.response.data;
        if (errors) {
          const errorMessage = Object.values(errors).join('\n');
          setError(errorMessage);
        } else {
          setError('Failed to add content. Please try again later.');
        }
      } else {
        setError('Failed to add content. Please try again later.');
      }
    }
  };

  const handleDeleteContent = async () => {
    try {
      const response = await axios.delete(`https://localhost:7296/api/ContentMaster/${deleteId}`);
      console.log('Response after DELETE:', response.data); // Logging response data
      setDeleteId(''); // Clear deleteId after successful deletion
      setError('');
    } catch (error) {
      console.error('Error deleting content:', error);
      setError('Failed to delete content. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Add New Content</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="pageTitle">Page Title:</label>
          <input type="text" id="pageTitle" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="updatedBy">Updated By:</label>
          <input type="text" id="updatedBy" value={updatedBy} onChange={(e) => setUpdatedBy(e.target.value)} required />
        </div>
        <button type="submit">Add Content</button>
      </form>

      <br></br>

      <button type="submit">View Content</button>

      {error && <p>{error}</p>}

      <h2>Delete Content by ID</h2>
      <div>
        <label htmlFor="deleteId">Enter ID to Delete:</label>
        <input type="text" id="deleteId" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
        <button onClick={handleDeleteContent}>Delete</button>
      </div>
    </div>
  );
};

export default CmsMasterPage;











// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';


// const CmsMasterPage = () => {
//   const history = useHistory(); // Initialize useHistory hook
//   const [pageTitle, setPageTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [updatedBy, setUpdatedBy] = useState('');
//   const [error, setError] = useState('');
//   const [deleteId, setDeleteId] = useState('');

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const newContent = { pageTitle, description, updatedBy };
//       const response = await axios.post('https://localhost:7296/api/ContentMaster', newContent);
//       console.log('Response after POST:', response.data); // Logging response data
//       setPageTitle('');
//       setDescription('');
//       setUpdatedBy('');
//       setError('');
//     } catch (error) {
//       console.error('Error adding content:', error);
//       if (error.response && error.response.data) {
//         console.error('Error response:', error.response.data);
//         const { errors } = error.response.data;
//         if (errors) {
//           const errorMessage = Object.values(errors).join('\n');
//           setError(errorMessage);
//         } else {
//           setError('Failed to add content. Please try again later.');
//         }
//       } else {
//         setError('Failed to add content. Please try again later.');
//       }
//     }
//   };

//   const handleDeleteContent = async () => {
//     try {
//       const response = await axios.delete(`https://localhost:7296/api/ContentMaster/${deleteId}`);
//       console.log('Response after DELETE:', response.data); // Logging response data
//       setDeleteId(''); // Clear deleteId after successful deletion
//       setError('');
//     } catch (error) {
//       console.error('Error deleting content:', error);
//       setError('Failed to delete content. Please try again later.');
//     }
//   };

//   const handleViewContent = () => {
//     // Redirect to ContentViewPage
//     history.push('/content-view'); // Replace '/content-view' with your actual route
//   };

//   return (
//     <div>
//       <h2>Add New Content</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <label htmlFor="pageTitle">Page Title:</label>
//           <input type="text" id="pageTitle" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} required />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
//         </div>
//         <div>
//           <label htmlFor="updatedBy">Updated By:</label>
//           <input type="text" id="updatedBy" value={updatedBy} onChange={(e) => setUpdatedBy(e.target.value)} required />
//         </div>
//         <button type="submit">Add Content</button>
//       </form>

//       <button onClick={handleViewContent}>View Content</button>

//       {error && <p>{error}</p>}

//       <h2>Delete Content by ID</h2>
//       <div>
//         <label htmlFor="deleteId">Enter ID to Delete:</label>
//         <input type="text" id="deleteId" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
//         <button onClick={handleDeleteContent}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default CmsMasterPage;
