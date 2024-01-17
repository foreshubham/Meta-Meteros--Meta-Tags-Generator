import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    websiteUrl = '';
    faviconUrl: string | null = null;
    nameBeforeDot: string | null = null;
  
    constructor(private http: HttpClient) {}
    imageUrl: string = '';
    selectedFile: File | null = null;
    selectedFileUrl: string | null = null;
  
    onFileChange(event: any): void {
      const file = event.target.files?.[0];
      if (file) {
        this.selectedFile = file;
        this.previewSelectedFile();
      }
    }
  
    previewSelectedFile(): void {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFileUrl = e.target.result;
      };
  
      if (this.selectedFile) {
        reader.readAsDataURL(this.selectedFile);
      }
    }
    fetchDetails() {
      if (!this.isValidURL(this.websiteUrl)) {
        alert('Please enter a valid URL.');
        return;
      }
  
      // Fetch the favicon
      this.faviconUrl = `https://www.google.com/s2/favicons?domain=${this.websiteUrl}`;
      
      // Extract the name before the dot
      this.nameBeforeDot = this.extractNameBeforeDot(this.websiteUrl);
    }
  
    isValidURL(inputURL: string): boolean {
      try {
        new URL(inputURL);
        return true;
      } catch (error) {
        return false;
      }
    }
  
    extractNameBeforeDot(url: string): string {
      const hostname = new URL(url).hostname || '';
      const dotIndex = hostname.indexOf('.');
      return dotIndex !== -1 ? hostname.slice(0, dotIndex) : hostname;
    }
}
