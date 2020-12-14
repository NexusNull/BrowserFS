import WebDav from '../../../src/backend/WebDav';
import {FileSystem} from '../../../src/core/file_system';

export default function WebDavFactory(cb: (name: string, obj: FileSystem[]) => void): void {
  if (WebDav.isAvailable()) {
    WebDav.Create({
      baseUrl: "http://localhost:180/fs",
    }, (e, fs?) => {
      if (e) {
        throw e;
      }
      fs.readdir("/", (err, contents) => {
        function deleteDir() {
          fs.rmdirR(contents.shift(), deleteDir);
        }
        deleteDir();
      });
      cb('WebDav', [fs]);
    });
  } else {
    cb('WebDav', []);
  }
}
