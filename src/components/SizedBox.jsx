// SizedBox.jsx
function SizedBox({ height, width }) {
    return (
        <div style={{ width: width || '100%', height: height || '100%', flexShrink: 0 }} />
    );
}

export default SizedBox;
