function main(bucketName = 'wp-sl-pident') {
    // [START storage_list_files]
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // The ID of your GCS bucket
    // const bucketName = 'your-unique-bucket-name';

    // Imports the Google Cloud client library
    const { Storage } = require('@google-cloud/storage');
    const path = require('path');
    const cwd = path.join(__dirname);
    const remoteFileList = [];
    // Creates a client
    const storage = new Storage({projectId: "bbc-east-pident-audio"});

    async function listFiles() {
        // Lists files in the bucket
        const [files] = await storage.bucket(bucketName).getFiles();

        files.forEach(file => {
            remoteFileList.push(file.name);
        });
    }


    async function downloadFile(srcFilename) {
        const destFilename = path.join(cwd, srcFilename)
        // passing the options
        const options = {
            destination: path.join(cwd, "public/audio" ,srcFilename),
        };

        // download object from Google Cloud Storage bucket
        await storage.bucket(bucketName).file(srcFilename).download(options);

        // [optional] a good log can help you in debugging
        console.log(
            "The object " + srcFilename +
            " coming from bucket " + bucketName +
            " has been downloaded to " + destFilename
        );
    }





    // async function downloadPublicFile(fileName) {
    //     const options = {
    //         destination: path.join(cwd, fileName),
    //     };

    //     // Download public file.
    //     await storage.bucket(bucketName).file(fileName).download(options);

    //     console.log(
    //         `Downloaded public file ${fileName} from bucket name ${bucketName} to destination.`
    //     );
    // }

    listFiles().catch(console.error).then(() => {
        remoteFileList.forEach(filename => {
            console.log("Downloading " + filename) 
            downloadFile(filename).catch(console.error);
    })
    });
    // [END storage_list_files]

    
}
main(...process.argv.slice(2));
