import { Share2, Save, Code, Copy } from 'react-feather'; // Assuming these are your icon components
import { useDispatch, useSelector } from 'react-redux';
import { CompilerSliceStateType, updateCurrentLanguage } from '@/redux/slices/compilerSlice';
import { RootState } from '@/redux/store';
import { Button } from './ui/button';
import { handleError } from '@/utils/handleError';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { toast } from "sonner";


export default function HelperHeader() {
    const [saveLoading, setSaveLoading] = useState(false);
    const [shareBtn, setShareBtn] = useState(false);
    const navigate = useNavigate();
    const fullCode = useSelector((state: RootState) => state.compilerSlice.fullCode);
    const { urlId } = useParams();

    useEffect(() => {
        if (urlId) {
            setShareBtn(true);
        } else {
            setShareBtn(false);
        }
    }, [urlId]);

    const handleSaveCode = async () => {
        setSaveLoading(true);
        try {
            const response = await axios.post('http://localhost:4000/compiler/save', {
                fullCode: fullCode,
            });
            navigate(`/compiler/${response.data.url}`, { replace: true });
        } catch (error) {
            handleError(error);
        } finally {
            setSaveLoading(false);
        }
    };

    const dispatch = useDispatch();
    const currentLanguage = useSelector((state: RootState) => state.compilerSlice.currentLanguage);

    return (
        <div className="__helper_header h-16 bg-gray-900 text-white flex justify-between items-center px-4 border">
            <div className="__btn_container flex space-x-4">
                <Button
                    variant="success"
                    className="flex items-center gap-1"
                    onClick={
                        handleSaveCode
                    }
                    
                    disabled={saveLoading}
                >
                    {saveLoading ? (
                        <>
                            <span className="animate-spin">
                                <Save size={16} />
                            </span>
                            <span>Saving</span>
                        </>
                    ) : (
                        <>
                            <Save size={16} />
                            <span>Save</span>
                        </>
                    )}
                </Button>
                {shareBtn && (
                    <Dialog>
                    <DialogTrigger className="whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 flex justify-center items-center gap-1">
                      <>
                        <Share2 size={16} />
                        Share
                      </>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="flex gap-1 justify-center items-center">
                          <Code />
                          Share your Code!
                        </DialogTitle>
                        <DialogDescription>
                        🚀 Instantly share your code creations! Click 'Share Code' to impress, collaborate, and inspire. Start sharing now! 🌟
                        </DialogDescription>
                        <div className="__url flex justify-center items-center gap-1">
                          <input
                            type="text"
                            disabled
                            className="w-full p-2 rounded bg-slate-800 text-slate-400 select-none"
                            value={window.location.href}
                          />
                          <Button
                            variant="outline"
                            className="h-full"
                            onClick={() => {
                              window.navigator.clipboard.writeText(
                                window.location.href
                              );
                              toast("URL Copied to your clipboard!");
                            }}
                          >
                            <Copy size={14} />
                          </Button>
                        </div>
                        <p className="text-center text-slate-400 text-xs">
                          Share this URL with your friends to collaborate.
                        </p>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                )}
            </div>
            <div className="__tab_switcher flex space-x-4 items-center">
                <small>Current Language:</small>
                <Select defaultValue={currentLanguage} onValueChange={(value) => dispatch(updateCurrentLanguage(value as CompilerSliceStateType['currentLanguage']))}>
                    <SelectTrigger className="w-32">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="html">HTML</SelectItem>
                        <SelectItem value="css">CSS</SelectItem>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
