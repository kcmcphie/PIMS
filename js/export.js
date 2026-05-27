document.getElementById("exportBtn").addEventListener("click", async () => {

    try {

        console.log("Starting export...");

        await window.view.when();

        // Take ArcGIS screenshot
    const screenshot = await window.view.takeScreenshot({
        format: "png",
        quality: 100
    });

        console.log("Screenshot success");

        // Clone layout
        const clone = document.getElementById("container").cloneNode(true);

        // Move clone offscreen
        clone.style.position = "absolute";
        clone.style.left = "-9999px";
        clone.style.top = "0";

        document.body.appendChild(clone);

        // Replace map with static screenshot
        const mapDiv = clone.querySelector("#map");

        mapDiv.innerHTML = "";

        const img = document.createElement("img");

        img.src = screenshot.dataUrl;

        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";

        mapDiv.appendChild(img);

        const liveScaleBar = document.querySelector(".esri-scale-bar");

        if (liveScaleBar) {

            const scaleBarClone = liveScaleBar.cloneNode(true);

            scaleBarClone.style.position = "absolute";
            scaleBarClone.style.left = "15px";
            scaleBarClone.style.bottom = "30px";
            scaleBarClone.style.zIndex = "999";

            mapDiv.style.position = "relative";

            mapDiv.appendChild(scaleBarClone);
        }

        // Render clone to canvas
        const canvas = await html2canvas(clone, {
            scale: 3,
            useCORS: true,
            backgroundColor: "#ffffff"
        });

        console.log("Canvas render success");

        // Cleanup
        document.body.removeChild(clone);

        // Create PDF
        const imgData = canvas.toDataURL("image/png");

        const { jsPDF } = window.jspdf;

        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "in",
            format: [11, 8.5]
        });

        pdf.addImage(
            imgData,
            "PNG",
            0,
            0,
            11,
            8.5
        );

        pdf.save("map-layout.pdf");

        console.log("PDF success");

    } catch (err) {

        console.error("FULL EXPORT ERROR:", err);

    }

});

