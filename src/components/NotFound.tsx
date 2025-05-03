

export default function NotFound() {
    return (
        <div className="not-found">
            <h1 className="not-found-title">404 - Page Not Found</h1>
            <p className="not-found-description">Sorry, the page you're looking for doesn't exist.</p>
            <a className="not-found-link" href="/">Go back to Home</a>
        </div>
    );
}