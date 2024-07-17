import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Support = () => {
  const [specialHours, setSpecialHours] = useState('');
  const [newSpecialHours, setNewSpecialHours] = useState('');

  useEffect(() => {
    // Fetch special hours from the backend
    axios.get('https://supply-spring-production.up.railway.app/api/special-hours')
      .then(response => setSpecialHours(response.data.hours))
      .catch(error => console.error('Error fetching special hours:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update special hours in the backend
    axios.post('https://supply-spring-production.up.railway.app/api/special-hours', { hours: newSpecialHours })
      .then(response => setSpecialHours(response.data.hours))
      .catch(error => console.error('Error updating special hours:', error));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ backgroundColor: '#f8d7da', padding: '20px', textAlign: 'center' }}>
        <img src="https://static.vecteezy.com/system/resources/previews/021/350/454/original/customer-icon-for-your-website-design-logo-app-ui-free-vector.jpg" alt="Customer Support" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
        <h2>Questions?</h2>
        <p>Our Customer Support will be opening late today. We apologize for any inconvenience.</p>
      </div>
      <div style={{ backgroundColor: '#d1ecf1', padding: '20px' }}>
      <p><strong><img src="https://static.vecteezy.com/system/resources/thumbnails/005/747/761/small/phone-call-icon-symbol-in-trendy-flat-style-call-icon-sign-for-app-logo-web-call-icon-flat-illustration-telephone-symbol-vector.jpg" alt="" style={{ width: '20px', marginRight: '5px' }} /> Call</strong> 888-551-7600 <span>Available 8am</span></p>
        <p><strong><img src="https://static.vecteezy.com/system/resources/previews/006/828/181/non_2x/flat-illustration-of-two-chat-bubble-intersect-each-other-suitable-for-online-chat-message-service-logo-group-discussion-forum-and-social-media-chat-bubble-icon-free-vector.jpg" alt="" style={{ width: '20px', marginRight: '5px' }} />Text</strong> 888-551-7600 <span>Available 8am</span></p>
        <p><strong><img src="https://livechat.design/images/livechat/DIGITAL%20%28RGB%29/PNG/Stacked_RGB_Orange.png" alt="" style={{ width: '20px', marginRight: '5px' }} />Live Chat</strong> <span>Available 8am</span></p>
        <p><strong><img src="https://static.vecteezy.com/system/resources/thumbnails/006/827/459/small_2x/email-icon-sign-symbol-logo-vector.jpg" alt="" style={{ width: '20px', marginRight: '5px' }} />Email</strong> <span>Response by Sun</span></p>
      </div>
      <div style={{ backgroundColor: '#f8d7da', padding: '20px' }}>
        <h2>Special Hours</h2>
        <p style={{ color: 'red' }}>{specialHours}</p>
        <p><strong>Monday – Thursday</strong> 8am–7:45pm</p>
        <p><strong>Friday</strong> 9am–7:45pm</p>
        <p><strong>Saturday</strong> 9am–5:45pm</p>
        <p><strong>Sunday</strong> 9am–5:45pm</p>

        <form onSubmit={handleSubmit}>
          <div>
            <label>New Special Hours: </label>
            <input
              type="text"
              value={newSpecialHours}
              onChange={(e) => setNewSpecialHours(e.target.value)}
            />
          </div>
          <button type="submit">Update </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
