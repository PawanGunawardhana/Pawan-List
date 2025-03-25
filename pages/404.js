import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404: Page Not Found</h1>
            <p>Go back to the <Link href="/" className='a'>HomePage</Link></p>
        </div>
    );
}
 
export default NotFound;