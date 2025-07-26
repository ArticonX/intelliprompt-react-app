import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Logo from '../components/Logo';

function Signup() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    acceptedTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let errs = {};
    if (!form.email) errs.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Email is invalid.';
    if (!form.password) errs.password = 'Password is required.';
    else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters.';
    if (!form.acceptedTerms) errs.acceptedTerms = 'You must accept the terms and conditions.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ 
      ...form, 
      [name]: type === 'checkbox' ? checked : value 
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    
    if (Object.keys(errs).length === 0) {
      setIsLoading(true);
      
      // Simulate API call delay
      setTimeout(() => {
        // In a real app, this would be an actual API call
        console.log('Signing up with:', form);
        
        // Store user session (in real app, this would be JWT token, etc.)
        localStorage.setItem('intelliprompt_user', JSON.stringify({
          email: form.email,
          signupTime: new Date().toISOString()
        }));
        
        // Redirect to dashboard
        navigate('/dashboard');
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <>
      <Logo />
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-intellipromptOrange rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-xl">I</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Create your account</h1>
        </div>

        <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg mb-4 hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign up with Google
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <FormInput 
            label="Email" 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange}
            placeholder="Enter your email address"
            error={errors.email}
          />
          
          <FormInput 
            label="Password" 
            type="password" 
            name="password" 
            value={form.password} 
            onChange={handleChange}
            placeholder="Enter your password"
            error={errors.password}
          />

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <div className="mb-6">
          <div className="flex items-center p-4 border border-gray-200 rounded-lg">
            <input 
              type="checkbox" 
              name="acceptedTerms" 
              id="acceptedTerms"
              checked={form.acceptedTerms} 
              onChange={handleChange}
              className="mr-3 h-4 w-4 text-intellipromptOrange focus:ring-intellipromptOrange border-gray-300 rounded"
            />
            <label htmlFor="acceptedTerms" className="text-sm text-gray-700">
              Verify you are human{' '}
              <span className="text-intellipromptOrange font-medium">CLOUDFLARE</span>
            </label>
            <div className="ml-auto">
              <div className="w-6 h-6 bg-intellipromptOrange rounded"></div>
            </div>
          </div>
          {errors.acceptedTerms && <p className="text-sm text-red-500 mt-1">{errors.acceptedTerms}</p>}
        </div>

        <p className="mt-6 text-center text-gray-600">
          Already have an Intelliprompt account?{' '}
          <Link to="/" className="text-black font-medium hover:underline">
            Log in
          </Link>
        </p>

        <p className="mt-4 text-xs text-gray-500 text-center">
          By clicking "Sign Up", you agree to our{' '}
          <a href="#terms" className="text-intellipromptOrange hover:underline">Terms of Service</a>{' '}
          and{' '}
          <a href="#privacy" className="text-intellipromptOrange hover:underline">Privacy Policy</a>
        </p>
      </div>
    </>
  );
}

export default Signup;
