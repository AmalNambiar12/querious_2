import Button from '../components/Button';
import {useEffect, useRef} from 'react';

const UploadWidget = () => {
    const cRef = useRef();
    const wRef = useRef();
    useEffect(() => {
        cRef.current = window.cloudinary;
        wRef.current = cRef.current.createUploadWidget({
            cloudName: 'dli69lafd',
            uploadPreset: 'querious'
        }, function (error, result) {
            console.log(result);
        }); 
    }, []);
    return (
        <Button buttonText="Attach Image" onClick={() => wRef.current.open()} />
            
    );
}
 
export default UploadWidget;